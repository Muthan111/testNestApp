import { Controller, Get } from "@nestjs/common";
import {AppService} from "./app.service";
import {ApiTags, ApiOperation, ApiResponse} from "@nestjs/swagger";

@ApiTags()
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {} 

    @Get()
    @ApiOperation({summary: "Get Hello"})
    @ApiResponse({status: 200, description: "Return Hello World!"})
    getHello(): string {
        return this.appService.getHello();
    }
}