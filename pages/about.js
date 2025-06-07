
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout title="احنا مين">
      <div className="bg-slate-100">
        <div className="w-[90%] mx-auto text-end p-5">
          <h1 className="text-center text-3xl my-3 font-bold text-white bg-[#3454a5] p-3 w-fit mx-auto rounded-lg">احنا مين</h1>
          <p className="opacity-80 font-bold text-xl my-5">
            احنا أول منصة محتوى طبي عربي في قالب ترفيهي لذيذ.. جينا علشان نلوّن الحياة بالصحة…ونخلي الطب أخف، أبسط، وألذّ!
          </p>
          <div className="flex justify-center my-10">
            <img src="/images/احنا مين.jpg" alt="احنا مين" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
          <div className="text-center">
            <p className="text-lg opacity-90 mb-5">
              نحن فريق من المتخصصين في المجال الطبي والإعلامي، نسعى لتقديم المحتوى الطبي بطريقة مبسطة وممتعة للجميع.
            </p>
            <p className="text-lg opacity-90">
              هدفنا هو نشر الوعي الصحي بين الناس وجعل المعلومات الطبية في متناول الجميع.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
