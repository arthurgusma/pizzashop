import { api } from "@/lib/axios";

export interface RegisterRestauranteBody {
    email: string
    restaurantName: string
    managerName: string
    phone: string
}

export async function registerRestaurant({ 
    email,
    restaurantName,
    managerName,
    phone
 }: RegisterRestauranteBody) {
    await api.post('/restaurants',{
        email,
        restaurantName,
        managerName,
        phone
    })
}