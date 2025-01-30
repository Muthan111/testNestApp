import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getHello(): string {
        return "Hello World!";
    }
}   // This is the service that the controller will use to get the data that it will return to the client.