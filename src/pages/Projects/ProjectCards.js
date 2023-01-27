import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProjectCards = ({ project }) => {
  const { name, photo, description, github, liveSite } = project;
  return (
    <div>
      <Card className="w-96 mb-6">
        <CardHeader color="blue" className="relative h-56 overflow-hidden">
          <img src={photo} alt="img-blur-shadow" className="h-full w-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2 text-start">
            {name}
          </Typography>
          <Typography variant="" className="mb-2 text-start">
            {description.length > 200
              ? `${description.substring(0, 150)} ...`
              : description}
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-end py-3">
          <a target="_blank" href={github}>
            <Button variant="filled" className="mr-4">
              GitHub
            </Button>
          </a>
          <a target="_blank" href={liveSite}>
            <Button variant="filled">Live Site</Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCards;
