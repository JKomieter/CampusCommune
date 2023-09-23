"use client";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";


const News = () => {
    return (
      <div className="md:flex hidden basis-1/5 flex-col gap-5" style={{maxWidth: "250px"}}>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 p-3">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-neutral-300 uppercase font-bold">Your day your way</p>
            <h4 className="text-neutral-700 font-medium text-xl">Your checklist for better sleep</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://img.freepik.com/premium-photo/portrait-beautiful-black-teenage-girl-with-books-her-hand_917664-23558.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://img.freepik.com/premium-photo/portrait-beautiful-black-teenage-girl-with-books-her-hand_917664-23558.jpg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">Get a good night's sleep.</p>
              </div>
            </div>
            <Button radius="full" size="sm">Get App</Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 p-3">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-neutral-300 uppercase font-bold">Super charged</p>
            <h4 className="text-neutral-100 font-medium text-xl">The new Macbook pro with M2 chip</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://cdn.mos.cms.futurecdn.net/bBAQjTGucAnERFdnJU6wdc.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/03/Apple-M2.jpg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">M2 chip</p>
                <p className="text-tiny text-white/60">From Apple store</p>
              </div>
            </div>
            <Button radius="full" size="sm">Get App</Button>
          </CardFooter>
        </Card>
      </div>
    );
}

export default News;