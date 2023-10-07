import React from "react";
import { RouteObject } from "react-router-dom";

export interface ComponentProvider {
    path: string
    routes: RouteObject[]
}