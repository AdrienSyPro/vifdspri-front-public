export default function FooterBrowser() {
  return (
    <div className="grid grid-cols-12">
      // faire des bulles indiquant mon niveau de compétence en étoiles, nombre d'années d'expérience, projets persos sur github en réfvérence...
      // Faire un dessin représentant le back et le front avec les technos sur l'ordi et sur le serveur et les protocoles connus sur le réseau
      <img className="w-28" src="/symfony.png" />
      <img className="w-28" src="/react.png" />
      <img className="w-28" src="/nextjs.png" />
      <img className="w-28" src="/vuejs.png" />
      <img className="w-28" src= "/rust_logo.svg" />
    </div>
  );
}