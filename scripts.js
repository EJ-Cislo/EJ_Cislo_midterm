//to be honest
//this was the one part of the assignment I was unsure 
//about how you wanted it. I did try though.

async function getPapers() {
    try {
        const response = await fetch("https://upadhayay.github.io/db.json")
        const data = await response.json();
        // js Dom part
        const papers_div = document.querySelector(".papers");
        for (let paper of data) {
            console.log(paper);
            const single_paper_div = document.createElement("div")
            single_paper_div.innerHTML = `
                <h2>Title: ${paper.title} </h2>
               <h3> Year: ${paper.year} </h3>
               <h3> Published: ${paper.published} </h3>`
               single_paper_div.classList.add('single_paper')
               papers_div.append(single_paper_div)
        }
    }
    catch(error) {
        console.log("Error in fetch")
    }
}
getPapers();