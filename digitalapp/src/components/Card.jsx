export default function Card({ children, title, subTitle }) {
  return (
    <>
      <div class="card ms-3 me-3 mt-3">
        <div class="card-header">{title}</div>
        <div class="card-body">
          <h5 class="card-title">{subTitle}</h5>
          {children}
        </div>
      </div>
    </>
  );
}
