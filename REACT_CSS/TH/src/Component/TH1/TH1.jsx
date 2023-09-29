import photo1 from './photo1.jpg'

export default function TH1() {
    return (
        <div className="container">
            <div>Đây là hướng dẫn dùng ảnh trong ReactJs</div>
            <img src={photo1} width="300px" ></img>
            
            <div>Đây là ảnh dùng link online</div>
            <img src="https://www.codingdojo.com/blog/wp-content/uploads/9-Types-of-Developers-Which-One-Will-You-Be-01.jpg" width="300px"></img>

            
        </div>
    );
}
