import React from "react";
import { Divider, Image } from "@nextui-org/react";
import { Button } from "../ui/button";
import { Card, CardHeader } from "../ui/card";
import { AiOutlineMail } from "react-icons/ai";
export default function HomePage() {
  return (
    <main className="bg-violet-50 font-montserrat relative">
      <section className="container flex flex-col lg:flex-row justify-center items-center h-[calc(100vh-80px)]">
        <div className="text-center lg:mr-8 lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Send Heartfelt Letters with Letter4Tomorrow
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-4">
            Experience the joy of sending secure and heartfelt letters to your
            loved ones.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 mb-8">
            Inspired by Violet Evergarden.
          </p>
          <Button className="text-lg px-8 py-3">Get Started</Button>
        </div>
        <div className="flex justify-center items-center mt-8 lg:mt-0">
          <Image
            className="object-contain max-w-[400px]] lg:max-w-[500px]"
            src="/amulet.gif"
          />
        </div>
      </section>
      <div className="pb-16">
        <h2 className="text-3xl font-bold text-violet-600 mt-4 text-center mb-12">
          Features Eternal Tomorrow
        </h2>
      </div>
      <main className="bg-white">
        <section className="container mx-auto mt-16 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 absolute inset-0 -top-[80px] pb-96">
            <div className="flex justify-center items-center">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 ">
                  Secure and Encrypted{" "}
                </h3>
                <p className="text-gray-600">
                  Your letters are encrypted end-to-end, ensuring privacy and
                  security.
                </p>
              </Card>
            </div>
            <div className="flex justify-center items-center">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Customizable Designs
                </h3>
                <p className="text-gray-600">
                  Choose from a variety of beautiful templates to customize your
                  letters.
                </p>
              </Card>
            </div>
            <div className="flex justify-center items-center">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Fast and Reliable Delivery
                </h3>
                <p className="text-gray-600">
                  We ensure timely delivery of your letters to your loved ones.
                </p>
              </Card>
            </div>
          </div>
        </section>
        <Divider />
        <section className="mt-96 md:lg:mt-0">
          <div className="hidden md:lg:xl:block mt-96">
            <div className="flex justify-between container">
              <div>
                <Card className=" p-4 ">
                  <Image
                    src="/home/iphone.png"
                    className="object-cover size-full"
                  />
                </Card>
              </div>
              <div className="mx-[] py-60">
                <h1 className="font-bold text-4xl">
                  See a Eternal Tomorrow <br />
                  Applications
                </h1>
                <p className="text-lg text-gray-600 mt-4">
                  With Our Application, you are able to expressing your <br />
                  emotion or expressing your heartfelt message to <br />
                  everyone also receiving a message from ur friend <br />
                  that secured encrypted
                </p>
                {/* <p className="text-md">
                  With Our Application, you are able to expressing your emotion
                  or expressing your heartfelt message to everyone or your
                  friend that securedy encrypted
                </p> */}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="block md:lg:xl:hidden">
              <Card className="w-[400px]  mt-52 mb-96">
                <div>
                  <Image src="/LOGO.png" className="object-contain" />
                </div>
                <CardHeader>
                  <h1 className="font-bold text-lg">
                    See a Eternal Tomorrow Applications
                  </h1>
                  <p className="text-sm text-gray-600 mt-4">
                    With Our Application, you are able to expressing your <br />
                    emotion or expressing your heartfelt message to <br />
                    everyone also receiving a message from ur friend <br />
                    that secured encrypted
                  </p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
}
