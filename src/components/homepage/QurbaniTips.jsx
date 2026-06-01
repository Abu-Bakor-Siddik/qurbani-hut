import React from "react";
import Tips from "@/assets/lightbulb.png";
import Image from "next/image";
import qurbaniTips from '@/data/qurbaniTips.json'

const QurbaniTips = () => {
  return (
    <section id="tips" className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center flex flex-col justify-center items-center  mb-12">
          <div>
            <Image src={Tips} alt="logo" height={50} width={50}></Image>
          </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Qurbani <span className="text-secondary">Tips</span>
            </h2>

          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Important guidelines and tips to help you choose the right animal
            for Qurbani.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qurbaniTips.map((tip) => (
            <div
              key={tip.id}
              className="card hover-3d bg-base-100 shadow-lg hover:shadow-xl transition-shadow border border-base-300">
              <div className="card-body  items-center text-center">
                <Image src={tip.icon} alt="icon" height={40} width={40} ></Image>
                <h3 className="card-title text-lg">{tip.title}</h3>
                <p className="text-sm opacity-70">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QurbaniTips;
