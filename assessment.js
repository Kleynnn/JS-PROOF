let nftCount = 0;

function mintNFT(destination, flight, boardingTime) {
  const nfts = {
    destination: destination,
    flight: flight,
    boardingTime: boardingTime,
  };

  nftCount++;
  return nfts;
}

function listNFTs(nfts) {
  for (let i = 0; i < nfts.length; i++) {
    console.log("Destination: " + nfts[i].destination);
    console.log("Flight: " + nfts[i].flight);
    console.log("Boarding Time: " + nfts[i].boardingTime);
    console.log();
  }
}

function getTotalSupply() {
  console.log("Total available flights: " + nftCount);
}

const flight1 = mintNFT("Singapore", "PAL", "7:30 AM");
const flight2 = mintNFT("Los Angeles", "CBA", "9:40 AM");
const flight3 = mintNFT("Toronto", "PAL", "11:30 AM");

const nfts = [flight1, flight2, flight3];

listNFTs(nfts);

getTotalSupply();
