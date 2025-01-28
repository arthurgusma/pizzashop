import { api } from "@/lib/axios";

export interface RegisterRestauranteBody {
    email: string
    restaurantName: string
    managarName: string
    phone: string
}

export async function registerRestaurant({ 
    email,
    restaurantName,
    managarName,
    phone
 }: RegisterRestauranteBody) {
    await api.post('/restaurants',{
        email,
        restaurantName,
        managarName,
        phone
    })
}