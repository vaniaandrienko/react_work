import {axiosService} from "./axios.service";
import {urls} from "../constatns";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (car) => axiosService.post(urls.cars, car)
}

export {
    carService
}