"use strict";

import axios from "axios";

class HTTPService {
    constructor() {
        this.http = axios.create({
            baseURL:
                process.env.NODE_ENV === "development"
                    ? "http://localhost:3000"
                    : "http://www.language-archives.services/api/"
        });
    }
}

export const http = new HTTPService().http;
