function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
      <div className="text-center">
        <h1 className="text-5xl text-grey-200">Discover the crafts </h1>
        <p className=" pt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut
          voluptas iure cum quod quisquam sapiente sit quasi maxime veniam
          perspiciatis, atque repudiandae ducimus maiores placeat delectus id
          nostrum ab.
        </p>
      </div>
      <div className="crafts w-full h-full flex justify-between flex-wrap ">
        <CardComponent footer={footer} header={header} />
        <CardComponent footer={footer} header={header} />
        <CardComponent footer={footer} header={header} />
        <CardComponent footer={footer} header={header} />
        <CardComponent footer={footer} header={header} />
        <CardComponent footer={footer} header={header} />
        <CardComponent footer={footer} header={header} />
        <CardComponent footer={footer} header={header} />
        <CardComponent footer={footer} header={header} />
        <CardComponent footer={footer} header={header} />
      </div>
    </div>
  );
}

export default Home;
