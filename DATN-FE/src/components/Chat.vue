<script setup lang="js">
import { ChatService, RoomService, ConversationService } from "../services";
import { register } from "vue-advanced-chat";
import { ref, onMounted, watch } from 'vue'
import { userStore } from "@/stores/userStore";
import Pusher from "pusher-js";
register();

var pusher = new Pusher("d26d4469335093847d19", {
  cluster: "ap1",
});

const props = defineProps(['theme', 'username'])




const selectedRoom = ref('');
const previousLastLoadedMessage = ref(null);
const lastLoadedMessage = ref(null);
const lastMessages = ref([]);
const currentUserId = ref(1);
const listeners = ref([]);


const rooms = ref([]);
const roomsLoaded = ref(false);
const loadingRooms = ref(false);

const messages = ref([]);
const messagesLoaded = ref(true);

const currentRoomId = ref(null);
const currentRoom = ref(null);
const roomActions = ref([
  { name: 'inviteUser', title: 'Invite User' },
  { name: 'removeUser', title: 'Remove User' },
  { name: 'deleteRoom', title: 'Delete Room' }
]);
const menuActions = [
  { name: 'inviteUser', title: 'Invite User' },
  { name: 'removeUser', title: 'Remove User' },
  { name: 'deleteRoom', title: 'Delete Room' }
];
const setup = async (username) => {
  //   await ChatService.login(username);

  loadingRooms.value = true;
  //   rooms.value = await ChatService.fetchRooms();
  rooms.value = [
    // {
    //     _id: 100000,
    //     roomId: '1',
    //     roomName: 'Room 1',
    //     avatar: 'assets/imgs/people.png',
    //     unreadCount: 4,
    //     index: 3,
    //     lastMessage: {
    //       _id: '1',
    //       content: 'Last message received',
    //       senderId: '1',
    //       username: 'User',
    //       timestamp: '10:20',
    //       saved: true,
    //       distributed: false,
    //       seen: false,
    //       new: true
    //     },
    //     users: [
    //       {
    //         _id: '1',
    //         username: 'Admin',
    //         avatar: 'assets/imgs/doe.png',
    //       },
    //       {
    //         _id: '2',
    //         username: 'User',
    //         avatar: 'assets/imgs/snow.png',
    //       }
    //     ],
    //     typingUsers: [ 2 ]
    // },
  ]
  loadingRooms.value = false;

  roomsLoaded.value = true;
};

var channel = pusher.subscribe(`chat.${userStore().user.id}`);
channel.bind("chat-event", function (data) {
  const room = rooms.value.find(function (room) {
    return room._id === currentRoomId.value;
  });
  room.users.forEach(function (user) {
    if (user._id == data.conversation.senderId) {
      messages.value = [...messages.value, data.conversation]
      markMessagesSeen(data.conversation)
    }
  })
})

var channel = pusher.subscribe('rooms');
channel.bind("room-event", function (data) {
  rooms.value = [
    ...data.rooms.rooms
  ]
})

// const fetchMessages = async ({ room, options = {} }) => {
//   const response = await RoomService.getMessageByRoomId(room._id)
//   messages.value = response.data.data.conversation
//   RoomService.seen(room._id)
// };
// const sendMessage = async ({ roomId, content }) => {
//   const admin_id = 1;
//   currentRoomId.value = rooms.value.filter(function (room) {
//     return room._id === roomId
//   })
//   const users = currentRoomId.value[0].users.filter(function (user) {
//     return user.id !== admin_id
//   })
//   var data = {
//     message: content,
//     user_id: users[0]._id,
//   };
//   const response = await ChatService.createChat(data);
//   messages.value = [...messages.value, response.data.data]
// };
// const fetchRooms = async () => {
//   const response = await RoomService.getRoom();
//   rooms.value = [
//     ...rooms.value,
//     ...response.data.data.rooms
//   ]
// }






const fetchRooms = async () => {
  let endRooms = 2;
  let startRooms = 1;
  if (endRooms && !startRooms) {
    roomsLoaded.value = true
    return
  }

  const response = await RoomService.getRoom();
  rooms.value = [
    ...rooms.value,
    ...response.data.data.rooms
  ]
  // this.incrementDbCounter('Fetch Rooms', data.length)

  // this.roomsLoaded = data.length === 0 || data.length < this.roomsPerPage

  // if (this.startRooms) this.endRooms = this.startRooms
  // this.startRooms = docs[docs.length - 1]

  // const roomUserIds = []
  // data.forEach(room => {
  //   room.users.forEach(userId => {
  //     const foundUser = this.allUsers.find(user => user?._id === userId)
  //     if (!foundUser && roomUserIds.indexOf(userId) === -1) {
  //       roomUserIds.push(userId)
  //     }
  //   })
  // })

  // this.incrementDbCounter('Fetch Room Users', roomUserIds.length)
  // const rawUsers = []
  // roomUserIds.forEach(userId => {
  //   const promise = firestoreService.getUser(userId)
  //   rawUsers.push(promise)
  // })

  // this.allUsers = [...this.allUsers, ...(await Promise.all(rawUsers))]

  // data.forEach(room => {
  //   roomList[room.id] = { ...room, users: [] }

  //   room.users.forEach(userId => {
  //     const foundUser = this.allUsers.find(user => user?._id === userId)
  //     if (foundUser) roomList[room.id].users.push(foundUser)
  //   })
  // })

  const formattedRooms = []

  Object.keys(rooms.value).forEach(key => {
    const room = rooms.value[key]

    const roomContacts = room.users.filter(
      user => user._id !== currentUserId.value
    )

    room.roomName =
      roomContacts.map(user => user.username).join(', ') || 'Myself'

    // const roomAvatar =
    //   roomContacts.length === 1 && roomContacts[0].avatar
    //     ? roomContacts[0].avatar
    //     : logoAvatar
  })

  rooms.value = rooms.value.concat(formattedRooms)
  // formattedRooms.forEach(room => this.listenLastMessage(room))

  // if (!this.rooms.length) {
  //   this.loadingRooms = false
  //   this.roomsLoadedCount = 0
  // }

  // this.listenUsersOnlineStatus(formattedRooms)
  // this.listenRooms(query)
};

const fetchMessages = async ({ room, options = {} }) => {
  const admin_id = 1;
  if (previousLastLoadedMessage.value && !lastLoadedMessage.value) {
    messagesLoaded.value = true
    return
  }

  currentRoomId.value = room._id

  const response = await RoomService.getMessageByRoomId(room._id)
  messages.value = response.data.data.conversation
  RoomService.seen(room._id)

  // this.incrementDbCounter('Fetch Room Messages', messages.length)
  if (currentRoomId.value !== room.roomId) return

  if (lastLoadedMessage.value) {
    previousLastLoadedMessage.value = lastLoadedMessage.value
  }
  // lastLoadedMessage.value = docs[docs.length - 1]

  messages.value.forEach((message) => {
    markMessagesSeen(message)
  })
};

const markMessagesSeen = (message) => {
  const admin_id = 1;
  if (
    message.sender_id !== admin_id &&
    (!message.seen)
  ) {
    ConversationService.seen(message._id)
  }
};

const sendMessage = async ({ content, roomId, files, replyMessage }) => {
  const admin_id = 1;
  currentRoom.value = rooms.value.filter(function (room) {
    return room._id === roomId
  })
  const users = currentRoom.value[0].users.filter(function (user) {
    return user.id !== admin_id
  })
  var data = {
    message: content,
    user_id: users[0]._id,
  };
  const response = await ChatService.createChat(data);
  messages.value = [...messages.value, response.data.data]
};

const parseTimestamp = (data, format = '') => {
  const date = new Date(data)
	if (format === 'HH:mm') {
		return `${zeroPad(date.getHours(), 2)}:${zeroPad(date.getMinutes(), 2)}`
	} else if (format === 'DD MMMM YYYY') {
		const options = { month: 'long', year: 'numeric', day: 'numeric' }
		return `${new Intl.DateTimeFormat('en-GB', options).format(date)}`
	} else if (format === 'DD/MM/YY') {
		const options = { month: 'numeric', year: 'numeric', day: 'numeric' }
		return `${new Intl.DateTimeFormat('en-GB', options).format(date)}`
	} else if (format === 'DD MMMM, HH:mm') {
		const options = { month: 'long', day: 'numeric' }
		return `${new Intl.DateTimeFormat('en-GB', options).format(
			date
		)}, ${zeroPad(date.getHours(), 2)}:${zeroPad(date.getMinutes(), 2)}`
	}

	return date
}



const formatTimestamp = (date, timestamp) => {
  const timestampFormat = isSameDay(date, new Date()) ? 'HH:mm' : 'DD/MM/YY'
  const result = parseTimestamp(date, timestampFormat)
  return timestampFormat === 'HH:mm' ? `Today, ${result}` : result
}

const zeroPad = (num, pad) => {
  return String(num).padStart(pad, '0')
}

const isSameDay = (d1, d2) => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  )
}

























const tearDown = async () => {
  await ChatService.logout();

  rooms.value = [];
  roomsLoaded.value = false;
  loadingRooms.value = false;

  messages.value = [];
  messagesLoaded.value = false;
};
onMounted(async () => {
  const self = this;
  await setup('John Doe');
  fetchRooms();

  watch(
    () => props.username,
    async (username) => {
      await tearDown();
      await setup(username);
    }
  );

  // watch(
  //   () => roomId.value,
  //   async (newValue) => {
  //     console.log(newValue)
  //   }
  // );
});
// ... implementation details
</script>
<template>
  <vue-advanced-chat height="calc(100vh - 130px)" :current-user-id="1" :theme="theme" :loading-rooms="loadingRooms"
    :rooms-loaded="roomsLoaded" :messages-loaded="false" :single-room="false" :show-search="false" :show-add-room="false"
    :show-files="false" :show-audio="false" :show-emojis="false" :show-reaction-emojis="false" :rooms="rooms"
    :messages="messages" @fetch-messages="fetchMessages($event.detail[0])" :room-actions="JSON.stringify(roomActions)"
    :menu-actions="JSON.stringify(menuActions)" @send-message="sendMessage($event.detail[0])" />
</template>
