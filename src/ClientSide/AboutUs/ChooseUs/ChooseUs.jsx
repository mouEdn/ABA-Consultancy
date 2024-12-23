import Footer from "../../Shared/Footer/Footer";

const ChooseUs = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <div
            style={{
              backgroundImage: `url("/images/choose.jpg")`,
              filter: "brightness(.4)",
            }}
            className="bg-no-repeat bg-center bg-cover w-full  
h-[420px] flex justify-center items-center"
          ></div>

          <div
            className="absolute inset-0 flex flex-col  justify-center max-w-[750px] px-[30px]
    md:px-[32px] lg:px-[80px]  xl:px-[100px]  2xl:px-[150px] 
        "
          >
            <h1 className="headTwo text-white pb-[12px] font-semibold">
              Why Choose Aba Consultation
            </h1>

            <p className=" bodyText text-white md:max-w-[550px] font-normal">
              At ABA Consulting, . Our mission is to equip autism centers with
              innovative strategies, expert guidance, and tailored resources
              that drive impactful outcomes.
            </p>
          </div>
        </div>
        <div
          className="mt-[10px] px-[30px]
   md:mt-[10px] md:px-[32px]
   lg:px-[80px] lg:mt-[30px]
   xl:px-[100px] xl:mt-[50px]
   2xl:px-[150px] 2xl:mt-[50px] "
        >
          <div className="w-full 2xl:max-w-[1000px] ">
            <h1 className="headTwo pb-[20px] text-[#0E0D0D]  font-outfit font-semibold">
              Why Choose Us
            </h1>
            <p className="bodyText text-[#0E0D0DCC]/[.8] pb-[30px] lg:pb-[50px] font-normal">
              At ABA Consulting, we are more than just a service provider—we are
              your dedicated partner in achieving excellence. With a team of
              experienced professionals, we offer comprehensive solutions
              tailored to meet the unique needs of autism centers. From ensuring
              compliance with complex regulations to providing top-tier staffing
              solutions, we handle the operational challenges so you can focus
              on delivering exceptional care. Our proven track record of
              reliability includes guaranteed results, such as completing CMDEs
              within five days and preparing your team for audits through
              real-world mock scenarios.
            </p>
          </div>
          {/* card */}
          <div className="grid grid-col-1 md:grid-cols-4 gap-[20px]">
            <div className="bg-[#FFFFFF] rounded-[8px] text-center  relative overflow-hidden py-[50px]">
              <div className=" h-[50px] w-[50px] mx-auto pb-[20px]   flex justify-center items-center z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="38"
                  viewBox="0 0 42 38"
                  fill="none"
                  className="your-tailwind-classes  transition-colors   w-full h-full"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.75 33.5833V37.75H10.5833V33.5833H14.75ZM6.41669 33.5833V37.75H2.24999V33.5833H6.41669ZM23.0833 33.5833V37.75H18.9167V33.5833H23.0833ZM31.4167 33.5833V37.75H27.25V33.5833H31.4167ZM39.75 33.5833V37.75H35.5833V33.5833H39.75ZM41.8333 6.5V31.5H0.166687V6.5H41.8333ZM37.6667 10.6667H4.33329V27.3333H37.6667V10.6667ZM21.6061 12.6718L23.6184 13.211L20.3832 25.2851L18.3709 24.7459L21.6061 12.6718ZM15.3911 13.1416L16.861 14.6124L12.4375 19.0358L16.8589 23.4562L15.3911 24.9267L9.49852 19.0341L15.3911 13.1416ZM26.6461 13.1376L32.5386 19.0301L26.6461 24.9227L25.1782 23.4521L29.5996 19.0318L25.1761 14.6084L26.6461 13.1376ZM14.75 0.25V4.4167H10.5833V0.25H14.75ZM6.41669 0.25V4.4167H2.24999V0.25H6.41669ZM23.0833 0.25V4.4167H18.9167V0.25H23.0833ZM31.4167 0.25V4.4167H27.25V0.25H31.4167ZM39.75 0.25V4.4167H35.5833V0.25H39.75Z"
                    fill="black"
                  />
                </svg>
              </div>

              <h1 className=" pb-[8px] headThree text-[#FF8C00]  font-semibold">
                Top 50
              </h1>
              <p className="bodyText  text-[#1F1E1ECC]/[.8]  font-normal">
                consulting firms
              </p>
            </div>
            <div className="bg-[#FFFFFF] rounded-[8px] text-center  relative overflow-hidden py-[50px]">
              <div className=" h-[50px] w-[50px] mx-auto pb-[20px]   flex justify-center items-center z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  className="your-tailwind-classes w-full h-full"
                >
                  <path
                    d="M19.0542 1.37499C19.7916 0.638481 20.7784 0.205105 21.8197 0.160368C22.861 0.11563 23.8812 0.46278 24.6792 1.13333L24.9458 1.37708L28.9042 5.33333H34.5C35.5508 5.33352 36.5628 5.73077 37.3332 6.44549C38.1035 7.16021 38.5754 8.13961 38.6542 9.18749L38.6667 9.49999V15.0958L42.625 19.0542C43.3621 19.7917 43.7958 20.7789 43.8406 21.8207C43.8853 22.8625 43.5378 23.8832 42.8667 24.6812L42.6229 24.9458L38.6646 28.9042V34.5C38.6649 35.5512 38.2679 36.5637 37.5531 37.3345C36.8384 38.1053 35.8587 38.5774 34.8104 38.6562L34.5 38.6667H28.9062L24.9479 42.625C24.2103 43.3621 23.2232 43.7958 22.1814 43.8406C21.1396 43.8853 20.1189 43.5378 19.3208 42.8667L19.0563 42.625L15.0979 38.6667H9.5C8.4488 38.667 7.43632 38.27 6.66552 37.5552C5.89473 36.8404 5.42259 35.8607 5.34375 34.8125L5.33333 34.5V28.9042L1.375 24.9458C0.637904 24.2082 0.204161 23.2211 0.159419 22.1793C0.114677 21.1375 0.462189 20.1168 1.13333 19.3187L1.375 19.0542L5.33333 15.0958V9.49999C5.33353 8.44915 5.73077 7.43719 6.44549 6.66684C7.16021 5.89649 8.13962 5.42464 9.1875 5.34583L9.5 5.33333H15.0958L19.0542 1.37499ZM22 4.32499L18.0417 8.28333C17.3496 8.97427 16.4366 9.39979 15.4625 9.48541L15.0958 9.49999H9.5V15.0958C9.50025 16.0748 9.15581 17.0225 8.52708 17.7729L8.27917 18.0437L4.32083 22.0021L8.27917 25.9583C8.97087 26.65 9.39715 27.5631 9.48333 28.5375L9.5 28.9042V34.5H15.0958C16.0748 34.4997 17.0226 34.8442 17.7729 35.4729L18.0438 35.7208L22 39.6792L25.9583 35.7208C26.65 35.0291 27.5631 34.6028 28.5375 34.5167L28.9042 34.5H34.5V28.9042C34.4997 27.9252 34.8442 26.9774 35.4729 26.2271L35.7208 25.9562L39.6792 22L35.7208 18.0417C35.0291 17.3499 34.6028 16.4369 34.5167 15.4625L34.5 15.0958V9.49999H28.9042C27.9252 9.50024 26.9774 9.1558 26.2271 8.52708L25.9563 8.27916L21.9979 4.32083L22 4.32499ZM28.4167 15.7167C28.7916 15.343 29.2947 15.1261 29.8237 15.1099C30.3528 15.0938 30.8682 15.2796 31.2652 15.6297C31.6622 15.9797 31.9111 16.4678 31.9612 16.9947C32.0114 17.5217 31.8592 18.0479 31.5354 18.4667L31.3604 18.6625L21.1938 28.8292C20.7968 29.2266 20.2677 29.4644 19.707 29.4975C19.1463 29.5305 18.5929 29.3564 18.1521 29.0083L17.9521 28.8312L12.9438 23.8229C12.5661 23.4489 12.3458 22.9446 12.3277 22.4134C12.3097 21.8822 12.4954 21.3642 12.8468 20.9655C13.1982 20.5667 13.6887 20.3173 14.218 20.2683C14.7472 20.2194 15.2752 20.3745 15.6937 20.7021L15.8896 20.875L19.5729 24.5583L28.4167 15.7167Z"
                    fill="black"
                  />
                </svg>
              </div>

              <h1 className=" pb-[8px] headThree text-[#FF8C00]  font-semibold">
                Top 50
              </h1>
              <p className="bodyText  text-[#1F1E1ECC]/[.8]  font-normal">
                years experience
              </p>
            </div>

            <div className="bg-[#FFFFFF] rounded-[8px] text-center  relative overflow-hidden py-[50px]">
              <div className=" h-[50px] w-[50px] mx-auto pb-[20px]   flex justify-center items-center z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 34 34"
                  fill="currentColor"
                  className="w-full h-full text-black"
                >
                  <path d="M17 0.333344C19.2101 0.333344 21.3298 1.21132 22.8926 2.77412C24.4554 4.33692 25.3333 6.45654 25.3333 8.66668C25.3333 10.8768 24.4554 12.9964 22.8926 14.5592C21.3298 16.122 19.2101 17 17 17C14.7899 17 12.6702 16.122 11.1074 14.5592C9.54464 12.9964 8.66667 10.8768 8.66667 8.66668C8.66667 6.45654 9.54464 4.33692 11.1074 2.77412C12.6702 1.21132 14.7899 0.333344 17 0.333344ZM17 4.50001C15.8949 4.50001 14.8351 4.939 14.0537 5.7204C13.2723 6.5018 12.8333 7.56161 12.8333 8.66668C12.8333 9.77175 13.2723 10.8316 14.0537 11.613C14.8351 12.3944 15.8949 12.8333 17 12.8333C18.1051 12.8333 19.1649 12.3944 19.9463 11.613C20.7277 10.8316 21.1667 9.77175 21.1667 8.66668C21.1667 7.56161 20.7277 6.5018 19.9463 5.7204C19.1649 4.939 18.1051 4.50001 17 4.50001ZM17 19.0833C22.5625 19.0833 33.6667 21.8542 33.6667 27.4167V33.6667H0.333332V27.4167C0.333332 21.8542 11.4375 19.0833 17 19.0833ZM17 23.0417C10.8125 23.0417 4.29167 26.0833 4.29167 27.4167V29.7083H29.7083V27.4167C29.7083 26.0833 23.1875 23.0417 17 23.0417Z" />
                </svg>
              </div>

              <h1 className=" pb-[8px] headThree text-[#FF8C00]  font-semibold">
                Top 50
              </h1>
              <p className="bodyText  text-[#1F1E1ECC]/[.8]  font-normal">
                Trusted by clients
              </p>
            </div>
            <div className="bg-[#FFFFFF] rounded-[8px] text-center  relative overflow-hidden py-[50px]">
              <div className=" h-[50px] w-[50px] mx-auto pb-[20px]   flex justify-center items-center z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                  className="w-full h-full text-black"
                >
                  <path d="M49.8564 41.0141L40.7128 24.1047C41.6456 21.9875 42.1675 19.6477 42.1675 17.1859C42.1675 7.69844 34.4761 0.0078125 24.9894 0.0078125C15.5003 0.0078125 7.80967 7.69922 7.80967 17.1859C7.80967 19.707 8.35732 22.0992 9.33232 24.2555L0.147947 41.0062C-0.148196 41.5445 -0.0989772 42.2086 0.271335 42.7C0.642429 43.1899 1.26899 43.4203 1.86738 43.2797L9.71035 41.4805L12.3947 48.9571C12.6041 49.5383 13.1346 49.9415 13.7494 49.9868C13.7893 49.9899 13.8275 49.9915 13.865 49.9915C14.1476 49.9914 14.4248 49.9147 14.6672 49.7695C14.9096 49.6244 15.1081 49.4162 15.2416 49.1672L23.2346 34.2759C23.8173 34.3349 24.4027 34.3644 24.9885 34.3642C25.5314 34.3642 26.0673 34.336 26.597 34.286L34.7634 49.179C34.9079 49.443 35.1256 49.6596 35.3904 49.8028C35.6551 49.946 35.9556 50.0096 36.2556 49.986C36.8689 49.9368 37.397 49.5344 37.6048 48.9563L40.2892 41.4797L48.1321 43.279C48.7337 43.4242 49.354 43.1906 49.7251 42.7023C50.0978 42.2148 50.1478 41.5539 49.8563 41.0141H49.8564ZM14.1493 44.5969L12.1836 39.1203C11.9148 38.3757 11.1352 37.9421 10.3633 38.1257L4.5625 39.4562L11.1743 27.3968C13.3517 30.3382 16.4454 32.557 20.0337 33.6367L14.1493 44.5969ZM10.9485 17.1859C10.9485 9.44448 17.2477 3.14604 24.9899 3.14604C32.7313 3.14604 39.0297 9.44448 39.0297 17.1859C39.0297 24.9273 32.7313 31.2273 24.9899 31.2273C17.2469 31.2273 10.9485 24.9273 10.9485 17.1859ZM39.636 38.1257C38.861 37.9429 38.0844 38.3757 37.8157 39.1202L35.8367 44.6366L29.8234 33.6717C33.507 32.5928 36.6758 30.3155 38.8813 27.2882L45.4657 39.4624L39.636 38.1257Z" />
                </svg>
              </div>

              <h1 className=" pb-[8px] headThree text-[#FF8C00]  font-semibold">
                Top 50
              </h1>
              <p className="bodyText text-[#1F1E1ECC]/[.8]  font-normal">
                Client satisfication
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sectionGap bg-[#1a2633]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ChooseUs;
