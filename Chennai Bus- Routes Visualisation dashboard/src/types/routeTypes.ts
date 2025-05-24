export interface RouteData {
  ID: number;
  TUM_Route_ID: string;
  Amnex_routeid: string;
  MTC_ROUTE_No: string;
  STOP_ID: string;
  SEQUENCE: number;
  STOP_NAME: string;
  LAT: number;
  LON: number;
  SOURCE: string;
  DESTIN: string;
  DIRECTION: string;
  STAGEID: string;
  STAGENO: string;
  STAGENAME: string;
  STAGENO_CLEAN: string;
  STAGENAME_CLEAN: string;
}

export interface StopData extends RouteData {
  // Additional properties specific to stops can be added here if needed
}

export interface RouteSelectorProps {
  routes: string[];
  onRouteSelect: (routeId: string) => void;
} 