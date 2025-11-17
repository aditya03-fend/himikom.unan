import { ArchiveDocumentCard, TitleSection } from '@/components'
import { DUMMY_DOCUMENT_ARCHIVE } from '@/utils/constants'

const ArsipDokumen = () => {
  return (
    <section className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col gap-18">
        <TitleSection 
        title="Perpustakaan Arsip"
        subtitle="Kerangka Dokumen yang akan membantu kamu menyusun file surat dengan rapi"
        />
        <div className="flex md:grid-cols-2 lg:grid-cols-3">
            {DUMMY_DOCUMENT_ARCHIVE.map((document) => (
                <ArchiveDocumentCard
                    imageUrl={document.img}
                    title={document.title}
                    author={document.author}
                    link={document.link}
                />
            ))}
        </div>
    </section>
  )
}

export default ArsipDokumen