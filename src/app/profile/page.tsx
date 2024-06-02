import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ProfilePage() {
    return (
        <div className="flex justify-center">
            <Card>
                <CardHeader>
                    <Avatar>
                        <AvatarImage
                            src="https://avatars.githubusercontent.com/u/44711725?v=4"
                            alt="avatar"
                        />
                    </Avatar>
                    <CardTitle>blck-snwmn</CardTitle>
                    <CardDescription>Descripton</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        <p>content</p>
                        <Button className="m-2">no action</Button>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Badge className="m-2">this is badge</Badge>
                                </TooltipTrigger>
                                <TooltipContent>
                                    aaaaaaa
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <Link
                            className={cn("m-2", buttonVariants({ variant: "default" }))}
                            href="https://github.com/blck-snwmn"
                        >
                            Click
                        </Link>
                    </div>
                </CardContent>
                <CardFooter>
                    <p>footer</p>
                </CardFooter>
            </Card>
        </div>
    );
}
