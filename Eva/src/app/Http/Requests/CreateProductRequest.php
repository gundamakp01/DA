<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\UploadedFile;

class CreateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'price' => 'required|integer',
            'description' => 'nullable|string',
            'images' => 'required|array',
            'images.*' => [
                'required',
                function ($attribute, $value, $fail) {
                    if (is_string($value)) {
                        // validate string
                        if (!is_string($value)) {
                            $fail($attribute . ' must be a string.');
                        }
                    } elseif ($value instanceof UploadedFile) {
                        // validate image
                        if (!$value->isValid()) {
                            $fail($attribute . ' is not a valid image.');
                        }
                        if (!in_array($value->getClientOriginalExtension(), ['jpg', 'jpeg', 'png'])) {
                            $fail($attribute . ' must be a JPG, JPEG or PNG image.');
                        }
                    } else {
                        $fail($attribute . ' must be a string or an image.');
                    }
                },
            ],
        ];
    }
}
