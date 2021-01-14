import { PaperScope } from 'paper/dist/paper-core'

export function NewScope() {
  return PaperScope()
}

export function Wave(scope) {
  this.color = 'blue'
  this.amount = 8
  this.height = 10
  this.offsetX = 0
  this.waveSpeed = 3
  this.selected = false

  this._path = new scope.Path({ fillColor: this.color })

  this.init = function(){
    this._path.fillColor = this.color
    this._path.selected = this.selected

    this._path.segments = []
    this._path.add(new scope.Point(0, view.size.height))
    this._path.add(new scope.Point(0, view.size.height))
    for(var i = 0; i <= this.amount; i++){
      this._path.add(new scope.Point(i / this.amount, 1) * view.size)
    }
    this._path.add(new scope.Point(view.size.width, view.size.height))

    this.update = function(_event) {
      var w_sinus = (Math.sin(_event.count/100) + 1) * view.size.width;

      // Loop through every secound point of the path to make waves:
      for (var i = 1; i <= this.amount+2; i = i+2){
        var segment = this._path.segments[i]
        // Make a sinus wave
        var sinus = Math.sin(_event.time * this.waveSpeed + i)
        // Change the y position of the point:
        segment.point.y = sinus * this.height + (this.height * 2)
      }

      // Same as over (but on the "left over" segments) to make it look more random
      for (var i = 2; i <= this.amount+2; i = i+2){
        var segment = this._path.segments[i]
        var sinus = Math.sin(_event.time * (this.waveSpeed * .8) + i)
        segment.point.y = sinus * this.height + (this.height * 2)
      }

      // Water "tide" (makes alle the waves go up and down):
      for(var i = 1; i <= this.amount+2; i++){
        this._path.segments[i].point.y += w_sinus/30 + this.offsetX
      }

      // Smooth the waves:
      this._path.smooth({ from: 2, to: this.amount+2 })
    }
  }
}
