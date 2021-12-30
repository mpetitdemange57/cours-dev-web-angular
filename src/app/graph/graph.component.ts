import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EChartsOption} from "echarts";
import {ListPersonnelService} from "../partage/service/list-personnel.service";
import {ThemeOption} from "ngx-echarts";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @ViewChild(ElementRef) chart!:ElementRef;

  theme: ThemeOption = {
    itemStyle:{
      color: [
        '#55C22D', '#ffeeff'
      ],
    },
  }

  chartOption: EChartsOption = {

    xAxis: {
      type: 'category',
      data: [
        'Homme',
        'Femme',
        'Autre'
      ],

    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}'
    }
  };


  constructor(private listPersonnelService:ListPersonnelService) {
    let map: Map<string, any> = new Map();
    map.set("M", {value: 0, itemStyle: {color: '#8377f5'}});
    map.set("F", {value: 0, itemStyle: {color: '#c700b4'}});
    map.set("A", {value: 0, itemStyle: {color: '#56ff00'}});
    this.listPersonnelService.fetch().forEach((personnel) => {
      personnel.forEach((employe:any) => {
        if (employe.sexe === "M") {
          map.get('M').value!++;
        } else if (employe.sexe === "F") {
          map.get('F').value!++;
        } else{
          map.get('A').value!++;
        }
        let valeurs = Array.from(map.values());
        this.chartOption.series  = [{type:"bar", color: ['blue','red','yellow'],data: valeurs}];
      });
    });
  }

  ngOnInit(): void {
    this.chart.nativeElement.setOption(this.chartOption);
  }
}
