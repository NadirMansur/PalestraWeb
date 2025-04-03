export const MapaPalestra = ({ width, height }) => {
  return (
    <div style={{ width: width, height: height, marginTop: "1rem" }}>
      <iframe
        title='|Google Maps'
        width='100%'
        height='100%'
        frameBorder='0'
        style={{ border: 0, borderRadius: "8px" }}
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.556961982106!2d-57.55296062438806!3d-38.00554237174066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584de52c29c8a1b%3A0xb5e9e4290dd768f7!2sCerrito%201280%2C%20B7600%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1712167800000'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};
