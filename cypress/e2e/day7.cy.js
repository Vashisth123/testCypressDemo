describe('web table', ()=>{
    it('table data', ()=>{
        cy.visit('https://practice.expandtesting.com/dynamic-table');
        cy.get('table.table-striped thead tr th').its('length').then((count)=>{
            cy.log("Total no of columns", count);
        });

        cy.get('table.table-striped tbody tr').its('length').then((count)=>{
            cy.log("total no of rows", count);
        })
    });

    it.only('read row data', ()=>{
        cy.visit('https://practice.expandtesting.com/dynamic-table');
        cy.get('table.table-striped tbody tr').each(($tr, i)=>{
            cy.wrap($tr).find('td').then(($td)=>{
                const name = $td.eq(0).text();
                const cpu = $td.eq(1).text();
                cy.log(`Row ${i}: ${name} - ${cpu}`)
                expect(name).to.eq("Firefox")
            })

        })

        
        let memoryIndex = -1;
        let cpuIndex = -1;
    cy.get('table.table-striped thead tr th').then(($header)=>{

        $header.each((i, th)=>{
            if(th.innerText.trim() === 'Memory'){
                memoryIndex = i;

            }
             if(th.innerText.trim() === 'CPU'){
                cpuIndex = i;

            }
            


        })
        cy.log("index of Header", memoryIndex, cpuIndex)
    })

    })


})