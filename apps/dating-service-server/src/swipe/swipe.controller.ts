import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SwipeService } from "./swipe.service";
import { SwipeControllerBase } from "./base/swipe.controller.base";

@swagger.ApiTags("swipes")
@common.Controller("swipes")
export class SwipeController extends SwipeControllerBase {
  constructor(
    protected readonly service: SwipeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
