export default function TH4(){
    return (
        <div className="container">
      <h1>Login</h1>
      <form>
        <p>nhập email:</p>
        <input
          name="email"
          type="text"
        />
        <p>nhập password:</p>
        <input
          name="password"
          type="password"
        />
        <br />
        <label>
          <input
            name="isRead"
            type="checkbox" />I read and accept the privacy policy:
        </label>

        <p>bấm submit form</p>
        <button>submit nè</button>
      </form>
    </div>
    )
}