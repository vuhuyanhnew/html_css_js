import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from "../Store/reducers/product";
import { useForm, Controller } from 'react-hook-form';

export default function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  const { control, handleSubmit, reset } = useForm();

  const onSubmit = (values) => {
    dispatch(addProduct(values));
    console.log(values)
    reset(); // Reset biểu mẫu sau khi thêm sản phẩm
  };

  return (
    <div className='container'>
      <div>
        <div className='title'>Thêm sản phẩm</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>Tên</div>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => <input className='input' {...field} />}
          />
          <div>Giá</div>
          <Controller
            name="price"
            control={control}
            defaultValue=""
            render={({ field }) => <input className='input' type="number" {...field} />}
          />
          <div>Màu</div>
          <Controller
            name="color"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select className='input' {...field}>
                <option value="green">Xanh</option>
                <option value="red">Đỏ</option>
                <option value="yellow">Vàng</option>
                <option value="pink">Hồng</option>
              </select>
            )} 
          />
          <div>Mô tả</div>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => <textarea rows="4" className='input' {...field} />}
          />

          <label>Trong vòng 14 ngày qua, bạn có dấu hiệu triệu chứng gì?</label>
          <div>
            <label>
              <Controller
                name="symptoms.fever"
                control={control}
                render={({ field }) => (
                  <>
                    <input {...field} type="checkbox" />
                    Sốt
                  </>
                )}
              />
            </label>
          </div>
          <div>
            <label>
              <Controller
                name="symptoms.cough"
                control={control}
                render={({ field }) => (
                  <>
                    <input {...field} type="checkbox" />
                    Ho
                  </>
                )}
              />
            </label>
          </div>
          <div>
            <label>
              <Controller
                name="symptoms.breathless"
                control={control}
                render={({ field }) => (
                  <>
                    <input {...field} type="checkbox" />
                    Khó thở
                  </>
                )}
              />
            </label>
          </div>
          <button type="submit" className='btnSubmit'>Thêm</button>

        </form>
      </div>

      <div className='product-list'>
        <div className='title'>List sản phẩm</div>
        {products?.products.map((e, i) => (
          <div key={i} className='item'>
            <div> {e?.name} - {e?.price} - {e?.color.toString()}</div>
            <div>{e?.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
