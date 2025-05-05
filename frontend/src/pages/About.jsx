import React, { useState } from "react";
import { Img } from "react-image";
import about from "../assets/img/About.jpg";
import Tombol from "../components/Tombol";

const About = () => {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [pesan, setPesan] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nama && email && pesan) {
            setSuccess(true);
        } else {
            alert("Harap Isi Semua Form");
        }
    };

    return (
        <>
            <div className="w-full h-[30svh] relative">
                <div className="absolute inset-0 bg-black opacity-50">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                        <h1>About Us</h1>
                    </div>
                </div>
                <Img
                    src={about}
                    alt="Logo"
                    style={{
                        width: "100%",
                        height: "30svh",
                        maxHeight: 700,
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className="container mx-auto ">
                <div className="mt-6">
                    <h1 className="subJudul">
                        ILENA INTERIOR <br />
                        STUDIO
                    </h1>
                </div>
                <div className="my-10 flex gap-4">
                    {/* <div className="w-1/2">
                        <Img
                            src={about}
                            alt="Logo"
                            style={{
                                width: "100%",
                                height: "30svh",
                                maxHeight: 700,
                                objectFit: "cover",
                                borderRadius: 10,
                            }}
                        />
                    </div> */}
                    <div className="w-full flex flex-col">
                        <div
                            className="flex gap-3 flex-col h-full"
                            style={{ textAlign: "justify" }}
                        >
                            <h1 className="tex-xll">
                                Ilena Interior Studio bergerak di bidang desain
                                dan rancang bangun ruang secara custom yang
                                berada di bawah naungan CV Catur Bhakti Mandiri.
                                Mulai tahun 2025, Ilena berkantor di Semarang,
                                Jawa Tengah. Fokus kami adalah mewujudkan ruang
                                impian setiap client dengan baik dan terarah.
                                Mulai dari hunian rumah pribadi, studio
                                apartment, perhotelan/resort. dan interior
                                lainnya. Layanan yang kami berikan meliputi
                                survey lokasi, konsep desain, sketsa desain,
                                hingga arsitektur interior.
                            </h1>
                            <h1>
                                Kami percaya bahwa setiap ruang memiliki cerita
                                bagi pemiliknya. Melalui desain yang dirancang
                                khusus, berbeda dan selalu mengedepankan
                                kenyamanan serta preferensi client. Ilena
                                memberikan terbaik yang dibuat dari hati dan
                                sepenuh hati. Bersama Ilena Interior Studio,
                                realisasikan impian ruang Anda!
                            </h1>
                        </div>
                    </div>
                </div>
                <hr className=" my-4" />
                <div className="my-10 flex gap-4">
                    <div className="w-1/2 flex flex-col">
                        <h1 className="text-2xl">Lokasi Kami :</h1>
                        <div className="flex gap-2 flex-col my-2">
                            <div className="my-2">
                                <h3 className="text-lg">Semarang</h3>
                                <h3 className="text-sm">
                                    Jl. Raya Semarang No. 123
                                </h3>
                            </div>
                            <div className="my-2">
                                <h3 className="text-lg">Semarang</h3>
                                <h3 className="text-sm">
                                    Jl. Raya Semarang No. 123
                                </h3>
                            </div>
                            <div className="my-2">
                                <h3 className="text-lg">Semarang</h3>
                                <h3 className="text-sm">
                                    Jl. Raya Semarang No. 123
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col">
                        <h1 className="text-2xl">Kontak Kami :</h1>
                        <form
                            className="flex flex-col gap-2 my-2"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                placeholder="Nama"
                                name="nama"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                className="p-2 border border-gray-400 rounded-md"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-2 border border-gray-400 rounded-md"
                            />
                            <textarea
                                placeholder="Pesan"
                                name="pesan"
                                value={pesan}
                                onChange={(e) => setPesan(e.target.value)}
                                className="p-2 border border-gray-400 rounded-md"
                            />
                            <Tombol
                                style="hitam rounded-md p-1 text-white"
                                text="Kirim"
                                link="#"
                                type="submit"
                            />
                        </form>
                        {success && (
                            <p className="text-green-500 text-center my-4">
                                Terima Kasih Sudah Mengisi Form
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
