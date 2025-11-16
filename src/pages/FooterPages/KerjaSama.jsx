import { TitleSection } from "@/components";
import React from "react";

const KerjaSama = () => {
  return (
    <section>
      <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col gap-6">
        <TitleSection title="Kerja Sama" />
        <p>
          Kerangka kerja kemitraan kami dirancang untuk kesetaraan dan
          transparansi. Semua pemesanan yang masuk akan mengikuti Kebijakan
          Pembatalan dan Pengembalian Dana yang telah disepakati bersama. Mitra
          berkewajiban untuk memperbarui ketersediaan (inventaris) secara akurat
          untuk memastikan pemesanan valid. Rincian komisi/biaya layanan dan
          jadwal pembayaran akan diuraikan lengkap dalam kontrak kerjasama.
          Tujuan kami adalah memastikan proses pemesanan yang adil dan dapat
          dipertanggungjawabkan bagi Mitra maupun pelanggan.
        </p>
      </div>
    </section>
  );
};

export default KerjaSama;
