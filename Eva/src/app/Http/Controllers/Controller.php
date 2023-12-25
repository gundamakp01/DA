<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function response($data, $status = Response::HTTP_OK, $headers = [])
    {
        $headers['Content-Type'] = 'application/json';

        return response()->json($data, $status, $headers, JSON_UNESCAPED_SLASHES);
    }
    const HTTP_STATUS_SERVER_ERROR = 500;
    /**
     * Response ok (currently duplicated)
     *
     * @param  array  $data
     * @param  string  $message
     * @return \Illuminate\Http\Response
     */
    public function responseOk($data = [], $message = '', $code = Response::HTTP_OK)
    {
        $res = [
            'success' => true,
            'data' => $data,
            'message' => $message,
        ];

        return $this->response($res, $code);
    }
    /**
     * Response success
     *
     * @param  array  $data
     * @param  string  $message
     * @return \Illuminate\Http\Response
     */
    public function responseSuccess($data = [], $message = '', $code = Response::HTTP_OK)
    {
        $res = [
            'success' => true,
            'data' => $data,
            'message' => $message,
        ];

        return $this->response($res, $code);
    }

    /**
     * Response unauthenticated
     *
     * @return \Illuminate\Http\Response
     */
    public function responseUnauthenticated()
    {
        return response()->json(['message' => trans('error.unauthenticated')], Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Response fail
     *
     * @param  array  $data
     * @param  string  $message
     * @return \Illuminate\Http\Response
     */
    public function responseFail($data = [], $message = '', $code = Response::HTTP_NOT_FOUND)
    {
        $res = [
            'success' => false,
            'data' => $data,
            'message' => $message,
        ];

        return $this->response($res, $code);
    }

    /**
     * Response error
     *
     * @param  string  $message
     * @return \Illuminate\Http\Response
     */
    public function responseError($message = '', $code = Response::HTTP_INTERNAL_SERVER_ERROR)
    {
        $res = [
            'success' => false,
            'message' => $message,
        ];

        return $this->response($res, $code);
    }
}
