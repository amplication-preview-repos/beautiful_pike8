/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SwipeWhereInput } from "./SwipeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SwipeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SwipeWhereInput,
  })
  @ValidateNested()
  @Type(() => SwipeWhereInput)
  @IsOptional()
  @Field(() => SwipeWhereInput, {
    nullable: true,
  })
  every?: SwipeWhereInput;

  @ApiProperty({
    required: false,
    type: () => SwipeWhereInput,
  })
  @ValidateNested()
  @Type(() => SwipeWhereInput)
  @IsOptional()
  @Field(() => SwipeWhereInput, {
    nullable: true,
  })
  some?: SwipeWhereInput;

  @ApiProperty({
    required: false,
    type: () => SwipeWhereInput,
  })
  @ValidateNested()
  @Type(() => SwipeWhereInput)
  @IsOptional()
  @Field(() => SwipeWhereInput, {
    nullable: true,
  })
  none?: SwipeWhereInput;
}
export { SwipeListRelationFilter as SwipeListRelationFilter };
