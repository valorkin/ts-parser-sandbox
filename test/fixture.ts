class Test {
  @HostBinding('class.panel-open')
  @Input()
  public get isOpen():boolean {
    return true;
  }
}