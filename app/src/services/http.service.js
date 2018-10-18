"use strict";

import axios from "axios";

class HTTPService {
    constructor() {
        this.http = axios.create({
            baseURL: "http://localhost:3000"
        });
    }
}

export const http = new HTTPService().http;
