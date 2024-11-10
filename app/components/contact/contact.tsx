"use client"
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../sectionTitle/SectionTitle';
import EllipseBackground from '../ellipse/EllipseBackground';
import { InputField } from './inputfield';
import ContactIcons from './contactIcons';
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineSendToMobile } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import SendButton from './button';

export default function Contact() {
    return (
        <section
            id="contact"
            className="flex flex-col items-center "
        >
            <div className="relative md:my-10">
                {/* Section Title with animation */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <SectionTitle title="Contact" />
                </motion.div>
                <EllipseBackground
                    width="395px"
                    height="395px"
                    backgroundColor="rgba(33, 103, 252, 0.1)"
                    opacity={1}
                    blur="130px"
                    top="-300px"
                    left="-150px"
                />
            </div>

            <div className="flex flex-col lg:flex-row w-full justify-center items-center px-6 lg:px-44 py-12 ">
                <div className=" w-full lg:w-[50%] flex flex-col space-y-8 justify-center items-center lg:px-12 ">
                    <motion.ul
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white space-y-9 font-abhaya text-center lg:text-start text-2xl lg:pr-16"
                    >
                        <li className="text-white font-medium">Talk to us</li>
                        <li className="text-blue-400 font-semibold">Let&apos;s Get closer</li>
                        <li className="text-white">Send us a message to learn more about our service</li>
                    </motion.ul>

                    {/* Contact Icons with animation */}
                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white space-y-9 font-abhaya text-[18px] lg:pr-44 "
                    >
                        <ContactIcons icon={IoLocationSharp} text='"123 Nile Street, Mohandessin, Giza, Egypt"' />
                        <ContactIcons icon={MdOutlineSendToMobile} text='0102972723 / 0945875985' className='pl-4' />
                        <ContactIcons icon={IoMail} text='Codeflow123@gamil.com' className='pl-4' />
                    </motion.ul>

                </div>

                {/* Form Fields with animation */}
                <motion.form
                    className="w-[80%] grid grid-cols-1 gap-x-6 gap-y-9 font-abhaya md:grid-cols-2 lg:w-[52%] pt-14 lg:pt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <InputField type="text" placeholder="Enter name here" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <InputField type="email" placeholder="Enter email here" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <InputField type="text" placeholder="Enter phone here" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <InputField type="text" placeholder="Enter location here" />
                    </motion.div>

                    {/* Message Input with animation */}
                    <motion.div
                        className="col-span-1 md:col-span-2"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <InputField
                            className="p-1"
                            type="textarea"
                            placeholder="Message"
                            height="200px"
                        />
                    </motion.div>

                    {/* Send Button with animation */}
                    <motion.div
                        className="col-span-1 md:col-span-2 flex justify-center lg:justify-start"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <SendButton />
                    </motion.div>

                </motion.form>

            </div>
        </section>
    );
}
