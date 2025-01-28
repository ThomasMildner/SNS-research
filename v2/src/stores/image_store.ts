import empty_profile_image from "@/assets/images/empty_profile_image.jpg"
import dog_image from "@/assets/images/dog_image.jpg"
import bird_image from "@/assets/images/bird_image.jpg"
import fish_image from "@/assets/images/fish_image.jpg"

export const defaultImage = empty_profile_image;

export const imageMap = new Map<string, string>([
    ["dog_image", dog_image],
    ["bird_image", bird_image],
    ["fish_image", fish_image]
]);