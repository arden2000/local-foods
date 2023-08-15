// interface IFoodList {
//   local_foods: Array<IFoodInfo>;
// }

interface IFoodInfo {
  name: string;
  description: string;
}

interface IGptResponse {
  local_foods: Array<IFoodInfo>;
  coordinates: {
    lat: number;
    lng: number;
  }
}

interface ILocationInfo {
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  }
}

export type { IFoodInfo, ILocationInfo, IGptResponse };