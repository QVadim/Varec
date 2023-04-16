const ratest = {
   rub: 1,
   usz: 139.94,
   chf: 0.01,
   usd: 0.012
};

function convert({ rub, currency }) {
   if (!ratest[currency]) {
      return null;
   }

   return rub * ratest[currency];
}
