import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EChartsOption} from "echarts";
import {ListPersonnelService} from "../partage/service/list-personnel.service";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @ViewChild(ElementRef) chart!:ElementRef;

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Homme', 'Femme'],
    },
    yAxis: {
      type: 'value',
    }
  };


  constructor(private listPersonnelService:ListPersonnelService) {
    let map: Map<string, number> = new Map();
    map.set("M", 0);
    map.set("F", 0);
    this.listPersonnelService.fetch().forEach((personnel) => {
      personnel.forEach((employe:any) => {
        if (employe.sexe === "M") {
          map.set('M', map.get('M')! + 1);
        } else {
          map.set('F', map.get('F')! + 1);
        }
        let valeurs = Array.from(map.values());
        this.chartOption.series = [{type:"bar",data: valeurs}];
      });
    });
  }

  ngOnInit(): void {
    this.chart.nativeElement.setOption(this.chartOption);
  }
}
