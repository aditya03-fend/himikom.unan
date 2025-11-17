import { Btn, ContactCard, Input, TextArea, TitleSection } from "@/components";
import { DUMMY_CONTACT } from "@/utils/constants";
import { Link } from "react-router-dom";

const KerjaSama = () => {
  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col gap-18">
      <section className="flex flex-col gap-8">
        <TitleSection title="Kontak" />
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3">
          {DUMMY_CONTACT.map((contact) => (
            <div key={contact.id} className="animate-fade-in-up">
              <ContactCard
                slug={contact.slug}
                name={contact.name}
                position={contact.position}
              >
                <div>
                  {contact.contacts.map((contactInfo, index) => (
                  <Link
                  key={index}
                  className="text-md text-white/80"
                  >
                    {" "}
                    {`${contactInfo.type}: ${contactInfo.value}`}
                  </Link>
                ))}
                </div>
              </ContactCard>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-8">
          <TitleSection title="Kerja Sama" />
          <p>
            Kerangka kerja kemitraan kami dirancang untuk kesetaraan dan
            transparansi. Semua pemesanan yang masuk akan mengikuti Kebijakan
            Pembatalan dan Pengembalian Dana yang telah disepakati bersama.
            Mitra berkewajiban untuk memperbarui ketersediaan (inventaris)
            secara akurat untuk memastikan pemesanan valid. Rincian komisi/biaya
            layanan dan jadwal pembayaran akan diuraikan lengkap dalam kontrak
            kerjasama. Tujuan kami adalah memastikan proses pemesanan yang adil
            dan dapat dipertanggungjawabkan bagi Mitra maupun pelanggan.
          </p>
        </div>
      </section>

      <section>
        <TitleSection title="Hubungi tim kami untuk diskusi lebih lanjut" />
        <form action="" className="flex flex-col gap-6 mt-12 resize-none">
          <Input label="Nama Lengkap" />
          <Input label="Nama Instansi / Perusahaan" />
          <Input label="E-mail" />
          <Input label="No. HP / WhatsApp" />
          <TextArea label="Pesan" />
          <Btn>Kirim</Btn>
        </form>
      </section>
    </div>
  );
};

export default KerjaSama;
