const apiKey = '122bd03287c72fd5aa2ee33464d7b4fc';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error(`Failed to fetch data. Status code: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


   /* 
           {
        "page": 1,
        "results": [
           1
            {
                "adult": false,
                "backdrop_path": "/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg",
                "genre_ids": [
                    878,
                    28,
                    18
                ],
                "id": 933131,
                "original_language": "ko",
                "original_title": "황야",
                "overview": "After a deadly earthquake turns Seoul into a lawless badland, a fearless huntsman springs into action to rescue a teenager abducted by a mad doctor.",
                "popularity": 2655.112,
                "poster_path": "/24CL0ySodCF8bcm38xtBeHzHp7W.jpg",
                "release_date": "2024-01-26",
                "title": "Badland Hunters",
                "video": false,
                "vote_average": 6.744,
                "vote_count": 317
            },
           2
            {
                "adult": false,
                "backdrop_path": "/unvtbkgxh47BewQ8pENvdOdme0r.jpg",
                "genre_ids": [
                    28,
                    18
                ],
                "id": 1212073,
                "original_language": "de",
                "original_title": "60 Minuten",
                "overview": "Desperate to keep custody of his daughter, a mixed martial arts fighter abandons a big match and races across Berlin to attend her birthday party.",
                "popularity": 1686.33,
                "poster_path": "/aajCqg315CoJPu1NmgPCkbRjnl6.jpg",
                "release_date": "2024-01-19",
                "title": "Sixty Minutes",
                "video": false,
                "vote_average": 7.005,
                "vote_count": 278
            },
           3
            {
                "adult": false,
                "backdrop_path": "/yyFc8Iclt2jxPmLztbP617xXllT.jpg",
                "genre_ids": [
                    35,
                    10751,
                    14
                ],
                "id": 787699,
                "original_language": "en",
                "original_title": "Wonka",
                "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
                "popularity": 1433.084,
                "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
                "release_date": "2023-12-06",
                "title": "Wonka",
                "video": false,
                "vote_average": 7.212,
                "vote_count": 2033
            },
           4
            {
                "adult": false,
                "backdrop_path": "/criPrxkTggCra1jch49jsiSeXo1.jpg",
                "genre_ids": [
                    878,
                    12,
                    28
                ],
                "id": 609681,
                "original_language": "en",
                "original_title": "The Marvels",
                "overview": "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
                "popularity": 1392.198,
                "poster_path": "/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
                "release_date": "2023-11-08",
                "title": "The Marvels",
                "video": false,
                "vote_average": 6.302,
                "vote_count": 1609
            },
           5
            {
                "adult": false,
                "backdrop_path": "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
                "genre_ids": [
                    28,
                    53,
                    18
                ],
                "id": 866398,
                "original_language": "en",
                "original_title": "The Beekeeper",
                "overview": "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
                "popularity": 1159.306,
                "poster_path": "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
                "release_date": "2024-01-10",
                "title": "The Beekeeper",
                "video": false,
                "vote_average": 7.3,
                "vote_count": 1031
            },
           6
            {
                "adult": false,
                "backdrop_path": "/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg",
                "genre_ids": [
                    28,
                    12,
                    14
                ],
                "id": 572802,
                "original_language": "en",
                "original_title": "Aquaman and the Lost Kingdom",
                "overview": "Black Manta seeks revenge on Aquaman for his father's death. Wielding the Black Trident's power, he becomes a formidable foe. To defend Atlantis, Aquaman forges an alliance with his imprisoned brother. They must protect the kingdom.",
                "popularity": 1088.68,
                "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
                "release_date": "2023-12-20",
                "title": "Aquaman and the Lost Kingdom",
                "video": false,
                "vote_average": 6.918,
                "vote_count": 1598
            },
           7
            {
                "adult": false,
                "backdrop_path": "/meyhnvssZOPPjud4F1CjOb4snET.jpg",
                "genre_ids": [
                    16,
                    28,
                    12,
                    35,
                    10751
                ],
                "id": 940551,
                "original_language": "en",
                "original_title": "Migration",
                "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
                "popularity": 1076.579,
                "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
                "release_date": "2023-12-06",
                "title": "Migration",
                "video": false,
                "vote_average": 7.663,
                "vote_count": 600
            },
           8
            {
                "adult": false,
                "backdrop_path": "/ehumsuIBbgAe1hg343oszCLrAfI.jpg",
                "genre_ids": [
                    16,
                    10751,
                    14,
                    12
                ],
                "id": 1022796,
                "original_language": "en",
                "original_title": "Wish",
                "overview": "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
                "popularity": 978.348,
                "poster_path": "/AcoVfiv1rrWOmAdpnAMnM56ki19.jpg",
                "release_date": "2023-11-13",
                "title": "Wish",
                "video": false,
                "vote_average": 6.656,
                "vote_count": 689
            },
           9
            {
                "adult": false,
                "backdrop_path": "/8GnWDLn2AhnmkQ7hlQ9NJUYobSS.jpg",
                "genre_ids": [
                    18,
                    878,
                    28
                ],
                "id": 695721,
                "original_language": "en",
                "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
                "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
                "popularity": 1012.79,
                "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
                "release_date": "2023-11-15",
                "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
                "video": false,
                "vote_average": 7.224,
                "vote_count": 1697
            },
           10
            {
                "adult": false,
                "backdrop_path": "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
                "genre_ids": [
                    28,
                    35,
                    80
                ],
                "id": 955916,
                "original_language": "en",
                "original_title": "Lift",
                "overview": "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
                "popularity": 1172.73,
                "poster_path": "/46sp1Z9b2PPTgCMyA87g9aTLUXi.jpg",
                "release_date": "2024-01-10",
                "title": "Lift",
                "video": false,
                "vote_average": 6.587,
                "vote_count": 740
            },
           11
            {
                "adult": false,
                "backdrop_path": "/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
                "genre_ids": [
                    28,
                    35
                ],
                "id": 1029575,
                "original_language": "en",
                "original_title": "The Family Plan",
                "overview": "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
                "popularity": 1128.642,
                "poster_path": "/a6syn9qcU4a54Lmi3JoIr1XvhFU.jpg",
                "release_date": "2023-12-14",
                "title": "The Family Plan",
                "video": false,
                "vote_average": 7.345,
                "vote_count": 881
            },
           12
            {
                "adult": false,
                "backdrop_path": "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
                "genre_ids": [
                    878,
                    18,
                    28
                ],
                "id": 848326,
                "original_language": "en",
                "original_title": "Rebel Moon - Part One: A Child of Fire",
                "overview": "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
                "popularity": 992.855,
                "poster_path": "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
                "release_date": "2023-12-15",
                "title": "Rebel Moon - Part One: A Child of Fire",
                "video": false,
                "vote_average": 6.416,
                "vote_count": 1403
            },
           13
            {
                "adult": false,
                "backdrop_path": "/ay0PJQZizDXk0pzhoGX4v7K9h7A.jpg",
                "genre_ids": [
                    28,
                    53
                ],
                "id": 1214314,
                "original_language": "en",
                "original_title": "One More Shot",
                "overview": "Following the attack on the black site in Poland, Navy SEAL Jake Harris is ordered to escort terrorist suspect Amin Mansur to Washington D.C. for interrogation. Before the prisoner transfer process is complete, though, the airport is attacked by a group of heavily armed, well-trained mercenaries.",
                "popularity": 1262.513,
                "poster_path": "/nQ1BQg4yMdlYSHvHZgwladzy7EF.jpg",
                "release_date": "2024-01-12",
                "title": "One More Shot",
                "video": false,
                "vote_average": 6.717,
                "vote_count": 106
            },
           14
            {
                "adult": false,
                "backdrop_path": "/acpFrSmVLnTNAIuHxnZArkC3dwU.jpg",
                "genre_ids": [
                    16,
                    28,
                    12,
                    10751,
                    14
                ],
                "id": 598387,
                "original_language": "en",
                "original_title": "The Tiger's Apprentice",
                "overview": "After the death of his grandmother, Tom Lee discovers he is part of a long lineage of magical protectors known as the Guardians. With guidance from a mythical tiger named Hu and the other Zodiac animal warriors, Tom trains to take on an evil force that threatens humanity.",
                "popularity": 802.259,
                "poster_path": "/iiid1xMhoAcW83VJ9LdAqf4Vtbr.jpg",
                "release_date": "2024-02-02",
                "title": "The Tiger's Apprentice",
                "video": false,
                "vote_average": 7.2,
                "vote_count": 40
            },
           15
            {
                "adult": false,
                "backdrop_path": "/yl2GfeCaPoxChcGyM5p7vYp1CKS.jpg",
                "genre_ids": [
                    28,
                    35,
                    10749
                ],
                "id": 848187,
                "original_language": "en",
                "original_title": "Role Play",
                "overview": "Emma has a wonderful husband and two kids in the suburbs of New Jersey – she also has a secret life as an assassin for hire – a secret that her husband David discovers when the couple decide to spice up their marriage with a little role play.",
                "popularity": 805.442,
                "poster_path": "/7MhXiTmTl16LwXNPbWCmqxj7UxH.jpg",
                "release_date": "2024-01-04",
                "title": "Role Play",
                "video": false,
                "vote_average": 6.01,
                "vote_count": 307
            },
           16
            {
                "adult": false,
                "backdrop_path": "/gg4zZoTggZmpAQ32qIrP5dtnkEZ.jpg",
                "genre_ids": [
                    28,
                    12,
                    53,
                    80,
                    18
                ],
                "id": 891699,
                "original_language": "en",
                "original_title": "Silent Night",
                "overview": "A tormented father witnesses his young son die when caught in a gang's crossfire on Christmas Eve. While recovering from a wound that costs him his voice, he makes vengeance his life's mission and embarks on a punishing training regimen in order to avenge his son's death.",
                "popularity": 796.382,
                "poster_path": "/nJCP1ZNTPKlZ7S0Kv3gbmuraAT4.jpg",
                "release_date": "2023-11-30",
                "title": "Silent Night",
                "video": false,
                "vote_average": 6.361,
                "vote_count": 434
            },
           17
            {
                "adult": false,
                "backdrop_path": "/6OnoMgGFuZ921eV8v8yEyXoag19.jpg",
                "genre_ids": [
                    28,
                    53
                ],
                "id": 1211957,
                "original_language": "en",
                "original_title": "The Painter",
                "overview": "An ex-CIA operative is thrown back into a dangerous world when a mysterious woman from his past resurfaces. Now exposed and targeted by a relentless killer and a rogue black ops program, he must rely on skills he thought he left behind in a high-stakes game of survival.",
                "popularity": 728.032,
                "poster_path": "/UZ0ydgbXtnrq8xZCI5lHVXVcH9.jpg",
                "release_date": "2024-01-05",
                "title": "The Painter",
                "video": false,
                "vote_average": 7.1,
                "vote_count": 52
            },
           18
            {
                "adult": false,
                "backdrop_path": "/zLj0peaxy5y2SlC6wNIQ4V0pfqg.jpg",
                "genre_ids": [
                    16,
                    10751,
                    35,
                    14
                ],
                "id": 1139829,
                "original_language": "en",
                "original_title": "Orion and the Dark",
                "overview": "A boy with an active imagination faces his fears on an unforgettable journey through the night with his new friend: a giant, smiling creature named Dark.",
                "popularity": 874.986,
                "poster_path": "/N2ddXhBX5kqwA9flbm2yqFtX6b.jpg",
                "release_date": "2024-02-02",
                "title": "Orion and the Dark",
                "video": false,
                "vote_average": 6.835,
                "vote_count": 161
            },
           19
            {
                "adult": false,
                "backdrop_path": "/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg",
                "genre_ids": [
                    28,
                    35
                ],
                "id": 897087,
                "original_language": "en",
                "original_title": "Freelance",
                "overview": "An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive.",
                "popularity": 713.698,
                "poster_path": "/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
                "release_date": "2023-10-05",
                "title": "Freelance",
                "video": false,
                "vote_average": 6.567,
                "vote_count": 536
            },
           20
            {
                "adult": false,
                "backdrop_path": "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
                "genre_ids": [
                    36,
                    10752,
                    28,
                    18
                ],
                "id": 753342,
                "original_language": "en",
                "original_title": "Napoleon",
                "overview": "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
                "popularity": 716.565,
                "poster_path": "/vcZWJGvB5xydWuUO1vaTLI82tGi.jpg",
                "release_date": "2023-11-22",
                "title": "Napoleon",
                "video": false,
                "vote_average": 6.525,
                "vote_count": 1640
            }
        ],
        "total_pages": 42446,
        "total_results": 848906
    }     */