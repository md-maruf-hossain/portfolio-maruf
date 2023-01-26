import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const BlogCard = ({ blog }) => {
    const { name, image } = blog;

  return (
    <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img src={image} alt="img-blur-shadow" className="h-full w-full" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {name}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-end py-3">
        <Button variant="filled">My Resume</Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
