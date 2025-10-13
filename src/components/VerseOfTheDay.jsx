import React, { useState, useEffect } from "react";

// List of verses for Worship, Salvation, God's Goodness, etc.
const verses = [
  { text: "Make a joyful noise unto the LORD, all ye lands.", reference: "Psalm 100:1" },
  { text: "Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins.", reference: "Acts 2:38" },
  { text: "O give thanks unto the LORD; for he is good: for his mercy endureth for ever.", reference: "Psalm 107:1" },
  { text: "Sing unto the LORD a new song: sing unto the LORD, all the earth.", reference: "Psalm 96:1" },
  { text: "O come, let us worship and bow down: let us kneel before the LORD our maker.", reference: "Psalm 95:6" },
  { text: "I was glad when they said unto me, Let us go into the house of the LORD.", reference: "Psalm 122:1" },
  { text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", reference: "John 3:16" },
  { text: "Serve the LORD with gladness: come before his presence with singing.", reference: "Psalm 100:2" },
  { text: "Blessed is the man that trusteth in the LORD, and whose hope the LORD is.", reference: "Jeremiah 17:7" },
  { text: "I will praise thee, O LORD, with my whole heart; I will shew forth all thy marvellous works.", reference: "Psalm 9:1" },
  { text: "O give thanks unto the LORD; call upon his name: make known his deeds among the people.", reference: "Psalm 105:1" },
  { text: "Let everything that hath breath praise the LORD. Praise ye the LORD.", reference: "Psalm 150:6" },
  { text: "Make a joyful noise unto the LORD, all the earth: make a loud noise, and rejoice, and sing praise.", reference: "Psalm 98:4" },
  { text: "Ascribe ye strength unto God: his excellency is over Israel, and his strength is in the clouds.", reference: "Psalm 68:34" },
  { text: "Sing unto the LORD, bless his name; shew forth his salvation from day to day.", reference: "Psalm 96:2" },
  { text: "O taste and see that the LORD is good: blessed is the man that trusteth in him.", reference: "Psalm 34:8" },
  { text: "Come, let us sing unto the LORD: let us make a joyful noise to the rock of our salvation.", reference: "Psalm 95:1" },
  { text: "I will extol the LORD at all times: his praise shall continually be in my mouth.", reference: "Psalm 34:1" },
  { text: "Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.", reference: "Psalm 100:4" },
  { text: "Sing unto the LORD, all the earth; shew forth from day to day his salvation.", reference: "Psalm 96:2" },
  { text: "Make a joyful noise unto the LORD, all ye lands.", reference: "Psalm 66:1" },
  { text: "Bless the LORD, O my soul: and all that is within me, bless his holy name.", reference: "Psalm 103:1" },
  { text: "O come, let us sing for joy to the LORD: let us shout aloud to the rock of our salvation.", reference: "Psalm 95:1" },
  { text: "Praise ye the LORD. Praise God in his sanctuary: praise him in the firmament of his power.", reference: "Psalm 150:1" },
  { text: "I will give thanks unto the LORD with my whole heart; I will shew forth all thy marvellous works.", reference: "Psalm 9:1" },
  { text: "Shout for joy unto the LORD, all the earth: sing, rejoice, and give thanks.", reference: "Psalm 98:4" },
  { text: "Let them praise his name in the dance: let them sing praises unto him with the timbrel and harp.", reference: "Psalm 149:3" },
  { text: "Sing unto the LORD with thanksgiving; sing praise upon the harp unto our God.", reference: "Psalm 147:7" },
  { text: "The LORD is my strength and my shield; my heart trusted in him, and I am helped.", reference: "Psalm 28:7" },
  { text: "Rejoice in the Lord always: and again I say, Rejoice.", reference: "Philippians 4:4" },
  { text: "Sing unto the LORD, O ye saints of his, and give thanks at the remembrance of his holiness.", reference: "Psalm 30:4" },
  { text: "Blessed is the nation whose God is the LORD; and the people whom he hath chosen for his own inheritance.", reference: "Psalm 33:12" },
  { text: "The LORD is my light and my salvation; whom shall I fear?", reference: "Psalm 27:1" },
  { text: "Let everything that hath breath praise the LORD. Praise ye the LORD.", reference: "Psalm 150:6" },
  { text: "Sing unto the LORD a new song: sing unto the LORD, all the earth.", reference: "Psalm 96:1" },
  { text: "O give thanks unto the LORD; for he is good; for his mercy endureth for ever.", reference: "Psalm 118:1" },
  { text: "I will bless the LORD at all times: his praise shall continually be in my mouth.", reference: "Psalm 34:1" },
  { text: "O sing unto the LORD a new song: sing unto the LORD, all the earth.", reference: "Psalm 96:1" },
  { text: "Praise ye the LORD. Praise God in his sanctuary: praise him in the firmament of his power.", reference: "Psalm 150:1" },
  { text: "I will praise thee, O LORD, with my whole heart; I will shew forth all thy marvellous works.", reference: "Psalm 9:1" },
  { text: "Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.", reference: "Psalm 100:4" },
  { text: "Sing unto the LORD, all the earth; shew forth from day to day his salvation.", reference: "Psalm 96:2" },
  { text: "O come, let us worship and bow down: let us kneel before the LORD our maker.", reference: "Psalm 95:6" },
  { text: "For the LORD is good; his mercy endureth for ever: and his truth endureth to all generations.", reference: "Psalm 100:5" },
  { text: "Make a joyful noise unto the LORD, all the earth: make a loud noise, and rejoice, and sing praise.", reference: "Psalm 98:4" },
  { text: "Sing and rejoice, O daughter of Zion: for, lo, I come, and I will dwell in the midst of thee, saith the LORD.", reference: "Zechariah 2:10" },
  { text: "Let us come before his presence with thanksgiving, and make a joyful noise unto him with psalms.", reference: "Psalm 95:2" },
  { text: "Sing unto him, sing psalms unto him; talk ye of all his wondrous works.", reference: "Psalm 105:2" },
  { text: "Praise ye the LORD: for it is good to sing praises unto our God; for it is pleasant; and praise is comely.", reference: "Psalm 147:1" },
  { text: "Blessed be the LORD God, the God of Israel, who only doeth wondrous things.", reference: "Psalm 72:18" },
  { text: "I will extol the LORD at all times: his praise shall continually be in my mouth.", reference: "Psalm 34:1" },
  { text: "O sing unto the LORD a new song: sing unto the LORD, all the earth.", reference: "Psalm 96:1" },
  { text: "Shout for joy unto the LORD, all the earth: sing, rejoice, and give thanks.", reference: "Psalm 98:4" },
  { text: "Let everything that hath breath praise the LORD. Praise ye the LORD.", reference: "Psalm 150:6" },
  { text: "Make a joyful noise unto the LORD, all ye lands.", reference: "Psalm 66:1" },
  { text: "O give thanks unto the LORD; call upon his name: make known his deeds among the people.", reference: "Psalm 105:1" },
  { text: "Serve the LORD with gladness: come before his presence with singing.", reference: "Psalm 100:2" },
  { text: "Sing unto the LORD with thanksgiving; sing praise upon the harp unto our God.", reference: "Psalm 147:7" },
  { text: "The LORD is my strength and my shield; my heart trusted in him, and I am helped.", reference: "Psalm 28:7" },
  { text: "Rejoice in the Lord always: and again I say, Rejoice.", reference: "Philippians 4:4" },
  { text: "Praise the LORD. Praise God in his sanctuary: praise him in the firmament of his power.", reference: "Psalm 150:1" },
  { text: "Bless the LORD, O my soul: and all that is within me, bless his holy name.", reference: "Psalm 103:1" },
  { text: "Blessed is the man that trusteth in the LORD, and whose hope the LORD is.", reference: "Jeremiah 17:7" },
  { text: "The LORD is my light and my salvation; whom shall I fear?", reference: "Psalm 27:1" },
  { text: "Taste and see that the LORD is good: blessed is the man that trusteth in him.", reference: "Psalm 34:8" },
  { text: "O give thanks unto the LORD; for he is good; for his mercy endureth for ever.", reference: "Psalm 118:1" },
];

export default function VerseOfTheDay() {
  const [verse, setVerse] = useState({});

  useEffect(() => {
    // Select a random verse each day
    const today = new Date().getDate(); // 1-31
    const index = today % verses.length; // rotate through verses by day
    setVerse(verses[index]);
  }, []);

  return (
    <section className="w-full py-12 md:py-16 text-center px-4 md:px-6">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Verse of the Day</h3>
      <p className="mb-2 text-lg md:text-xl italic">&quot;{verse.text}&quot;</p>
      <p className="text-gray-600 text-base md:text-lg">{verse.reference}</p>
    </section>
  );
}
