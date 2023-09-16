import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from 'next/link'
export function CardProduct({title, description, img, rute}: {title: string, description: string, img:string, rute:string}  ) {

  return (
    <Card className=" relative pt-10 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image
          src={img}
          alt="card-image"
          fill={true}
          objectFit="cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button color="blue">
          <Link href={rute}>
          Read More
          </Link>
          </Button>
      </CardFooter>
    </Card>
  );
}