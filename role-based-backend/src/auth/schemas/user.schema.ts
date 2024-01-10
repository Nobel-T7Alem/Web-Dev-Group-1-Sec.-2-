import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})

export class User{
        @Prop()
        name:string
    
        @Prop()
        username: string;
    
        @Prop({ unique: [ true, 'Duplicate email entered' ] })
        email: string;
    
        @Prop()
        password: string;

        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
          }
}

export const UserSchema= SchemaFactory.createForClass(User)