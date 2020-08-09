import scrapy

class TrialSpider(scrapy.Spider):
    name = "flipkart-spider"
    start_urls = ["https://www.myntra.com/men-tshirts?sort=new/","http://www.fashionvignette.blogspot.com/","http://stylebubble.co.uk/",
                    "https://blog.patternbank.com/","https://www.asos.com/men/new-in/new-in-clothing/cat/?cid=6993&nlid=mw|clothing|shop+by+product",
                    "https://www.nordstrom.com/browse/men/bestsellers?breadcrumb=Home%2FMen%2FBestsellers&origin=topnav","https://www.nordstrom.com/browse/men/new-concepts?breadcrumb=Home%2FMen%2FNew%20Concepts%3A%20NOAH&origin=topnav",
                    "https://www.mrporter.com/en-in/mens/clothing/t-shirts","https://www.collezioni.info/en/","https://www.trendsenses.com/",
                    ]

    def parse(self,response):
        links = response.xpath("//img/@src")
        html = ""
        url_list = []
        for link in links:
            
            url = link.get()

            if any(extension in url for extension in [".jpg",".png",".gif"]) and url not in url_list:
                url_list.append(url)
                html += """<a href = {url}"
                target = "_blank">
                <img src = "{url}" height = "33%" width = "33%"/>
                </a>""".format(url=url)

                with open("flipkart.html","a") as page:
                    page.write(html)
                    page.close()
                
                with open("flipkart-links.txt","a") as vl:
                    vl.write(url)
                    vl.write('\n')
                    vl.close()