import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";


export default function Home() {
  return (
    <main className="grid lg:grid-cols-3 px-4 py-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
          praesentium eaque magni laudantium quod nisi placeat doloribus,
          molestias aliquam quaerat sequi laborum quo atque nostrum saepe optio
          dolores. Nulla, blanditiis.
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/bbs-posts/1"} className="text-blue-500">
            Read More
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
          praesentium eaque magni laudantium quod nisi placeat doloribus,
          molestias aliquam quaerat sequi laborum quo atque nostrum saepe optio
          dolores. Nulla, blanditiis.
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/bbs-posts/1"} className="text-blue-500">
            Read More
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
          praesentium eaque magni laudantium quod nisi placeat doloribus,
          molestias aliquam quaerat sequi laborum quo atque nostrum saepe optio
          dolores. Nulla, blanditiis.
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/bbs-posts/1"} className="text-blue-500">
            Read More
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
