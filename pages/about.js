
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
          <img src="/images/احنا مين.jpg" alt="" className="w-[400px] mx-auto" />
        </div>
      </div>
    </Layout>
  )
}
