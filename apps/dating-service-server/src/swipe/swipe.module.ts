import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SwipeModuleBase } from "./base/swipe.module.base";
import { SwipeService } from "./swipe.service";
import { SwipeController } from "./swipe.controller";
import { SwipeResolver } from "./swipe.resolver";

@Module({
  imports: [SwipeModuleBase, forwardRef(() => AuthModule)],
  controllers: [SwipeController],
  providers: [SwipeService, SwipeResolver],
  exports: [SwipeService],
})
export class SwipeModule {}
