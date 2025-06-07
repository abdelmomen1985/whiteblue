
import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout title="اتصل بنا">
      <div className="bg-slate-100">
        <div className="w-[90%] mx-auto text-end p-5">
          <h1 className="text-center text-3xl my-3 font-bold text-white bg-[#3454a5] p-3 w-fit mx-auto rounded-lg">اتصل بنا</h1>
          <div className="flex flex-col items-center gap-5 my-10">
            <input type="text" placeholder="الاسم" className="shadow-lg outline-none my-3 transition-all duration-300 border-2 border-[#072546]/20 focus:border-[#3454a5] p-3 rounded-lg w-[70%] lg:w-[49%]" />
            <input type="text" placeholder="Email" className="shadow-lg outline-none my-3 transition-all duration-300 border-2 border-[#072546]/20 focus:border-[#3454a5] p-3 rounded-lg w-[70%] lg:w-[49%]" />
            <textarea name="" id="" className="shadow-lg mx-auto outline-none my-3 transition-all duration-300 border-2 border-[#072546]/20 focus:border-[#3454a5] p-3 rounded-lg w-[70%] lg:w-[70%]" placeholder="Enter Your Message"></textarea>
            <button className="text-white shadow-lg w-[50%] mx-auto transition-all duration-300 cursor-pointer rounded-md bg-[#3454a5] p-3 -skew-x-[10deg] font-bold hover:skew-x-[10deg] hover:bg-black hover:text-white">إرسال</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}div>
    </Layout>
  )
}
