const Color = require('../model/Color');

class ColorController {
    async create(data) {
        return new Promise(
        (res,rej)=>{
                 try {
                    const color = new Color(data);
                    color
                      .save()
                      .then((success) => {
                        res({
                          msg: "Data added",
                          status: 1,
                        });
                      })
                      .catch((error) => {
                        rej({
                          msg: "Unable to add the data",
                          status: 0,
                        });
                      }); 
        } catch (err) {
        rej({
        msg: 'Internal sever error',
        status: 0
        })
        }
        }
        )
    }

    // Implement other methods similarly
    async read(id) {
        // Implementation here
    }

    async updateStatus(id) {
        // Implementation here
    }

    async edit(id, data) {
        // Implementation here
    }

    async delete(id) {
        // Implementation here
    }
}

module.exports = ColorController;
